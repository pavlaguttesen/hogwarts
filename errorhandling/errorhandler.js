export default function (err, req, res, next) {

    let error = "Internal Server Error";
    if (err.statusCode == 404){
        error = "Not Found";
    } else if (err.statusCode == 400) {
        error = "Bad Request";
    }

    res.status(err.statusCode).json(
        {
            message: err.message,
            error: error,
            statusCode: err.statusCode
        }
    );

    // console.log(err.message)
    
    // res.status(err.statusCode).json ({
    //     message: err.message ,
    //     error: "Internal Server Error",
    //     statusCode: err.statusCode
    // }
    // )
}