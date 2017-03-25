import cookie from 'react-cookie';
import CryptoJS from 'crypto-js';
import _ from 'underscore';
const COOKIE = 'COOKIE';

const COOKIE_ENCRYPT_KEY = 'ltkM6dW8i2j75c1CQ7et42r671mU9935';

export const _COOKIE = COOKIE;

export function saveToCookie(key, value, path = '/', maxAge = null) {
    let options = {};
    let maxAgeSecond;
    let eValue;

    options.path = path;

    if (maxAge !== null) {
        maxAgeSecond = Math.floor((new Date(maxAge).getTime() - new Date().getTime()) / 1000);
        options.maxAge = (maxAgeSecond !== undefined ) ? maxAgeSecond : 60 * 60 * 2;
    }

    if(_.isObject(value)){
        value = JSON.stringify(value);
    }

    eValue = CryptoJS.AES.encrypt(value.toString(), COOKIE_ENCRYPT_KEY);

    cookie.save(key, eValue.toString(), options);
}

export function getValueFromCookie(value, isObject = false) {
    let eValue = cookie.load(value, true);

    if(eValue !== undefined){
        let dValue = CryptoJS.AES.decrypt(eValue.toString(), COOKIE_ENCRYPT_KEY);
        dValue = dValue.toString(CryptoJS.enc.Utf8);

        return isObject ? JSON.parse(dValue) : dValue;
    }

    return undefined;
}

/**
 *
 * @param keys type Array
 * @param path type String
 * @returns {*}
 */
export function removeCookieWithValue(keys, path = '/') {
    keys = _.isArray(keys) ? keys : [keys];
    return keys.map((key)=>{
        cookie.remove(key, {path})
    });
}
