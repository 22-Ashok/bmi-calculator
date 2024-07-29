
const Result = ( {result, clearResult } ) => {

    return (
        <div>
            <span> Your BMI result is: { result }</span>
             { result >= 25 ? <span className="text-red-700 font-semibold"> over weight </span > : (result<=25 && result>=18.5 ? <span className="text-green-700 font-semibold"> healthy </span> : (result>0 && <span className="text-orange-700 font-semibold"> under weight </span>))}
        </div>
    )
}

export default Result 