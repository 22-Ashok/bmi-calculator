import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
     
    return (
        <div className="text-center">
          <h1 className="text-center text-blue-500 font-extrabold text-2xl my-2"> BMI Calculator </h1>
          <p> Body Mass Index BMI is used to determine whether you are healthy weight range for your height </p>
          
          <ChildComponent />
        </div>
       
    )
}

export default ParentComponent