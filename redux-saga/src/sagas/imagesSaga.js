import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError } from '../actions';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

function handleTrail(){
    return new Promise((res,rej) => {
        console.log("in")
        return res(10)
    })
}

export default function* watchImagesLoad() {
    // yield handleTrail();
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
