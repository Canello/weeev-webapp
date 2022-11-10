import { useState } from "react";

export const useFetch = (
    initialData=null,
    initialIsFetching=false,
    initialError=null
) => {
    const [ data, setData ] = useState(initialData);
    const [ isFetching, setIsFetching ] = useState(initialIsFetching);
    const [ error, setError ] = useState(initialError);

    const request = async (
        serviceCall,
        callbackStart=null,
        callbackSuccess=null,
        callbackFailed=null
    ) => { 
        setIsFetching(true);
        callbackStart && callbackStart();
        try {
            const res = await serviceCall();
            setData(res);
            setError(null);
            callbackSuccess && callbackSuccess(res);
        } catch (err) {
            console.log(err);
            setError('error');
            callbackFailed && callbackFailed(err);
        } finally {
            setIsFetching(false);
        }
    }

    return [
        request,
        data,
        isFetching,
        error
    ];
}