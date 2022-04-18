import React from 'react';

const ShowTime = ({time}) => {
    return (
        <>
        {
            Object.keys(time).map(key => {
                return (
                    <span key={key}>
                    {key === Object.keys(time).slice(-1)[0]
                        ? (
                            <>
                                {/*{time[key] >= 10? time[key] : ('0' + time[key])}*/}
                                {(time[key] >= 10) && (time[key] < 100)
                                    ? time[key]
                                    : time[key] === 100
                                        ? '00'
                                        : ('0' + time[key])
                                }
                            </>
                          )
                        : (
                            <>
                                {time[key] >= 10? time[key] : ('0' + time[key])}:
                            </>
                          )
                    }
                    </span>
                )
            }

            )
        }
        </>
    );
};

export default ShowTime;