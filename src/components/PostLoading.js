import React from "react";

export default function PostLoading(Component){
    return function PostLoadingComponent ({isLoading, ...props}){
        if (!isLoading) return <Component {...props} />;
        return(
            <div>
                <p style ={{fontSize: '25px', marginTop: '1%'}}>
                    We are waiting for the data load!...
                </p>
            </div>
        );
    };
    
}