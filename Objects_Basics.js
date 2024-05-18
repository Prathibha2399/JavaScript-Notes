/* ----------------------------------------------------------- OBJECTS ------------------------------------------------------------------- */


/* 
    Objects are collections of various datas. Generally we have Data-types which allows to store data. But data-type holds only single type of data (i.e. if declared with string then it must hold string types of datas or if int then number/integer type of datas or whatever).Objects over-rides all such problems.

    Generally the are in Key-Valued PerformanceObserverEntryList,
        Key -> (Properity name)A string and must be unique
        Value -> can be anything.A


** Hint : relate object as a wadrobe of books and each self specifies a type of books stored hence consider as a Key and books in general as values. 


-------------------------------------------------------------------****----------------------------------------------------------------------------

1. Objects Creation :
    a) either using {}                        // let val = {}    ---> Literal syntax
    b) either using new keyword               // let val = new Object()    ---> Constructor syntax

---------------------------------------------------------------------------------------------------------------------------------------------------

2. Operations on object :
    eg. let user = {
            name : "John",
            age : 30,
            email : "john@gmail.com",
            location : "Delhi"
        }
    a) Adding new property : user["phone"] = "1234567890"           ///  let user = {
                                                                            name : "John",
                                                                            age : 30,
                                                                            email : "john@gmail.com",
                                                                            location : "Delhi",
                                                                            phone : "1234567890"
                                                                        }
    
    b) Get property value : console.log(user.name)     //  John
    
    c) Removing a property : delete location             // let user = {
                                                                name : "John",
                                                                age : 30,
                                                                email : "john@gmail.com",
                                                                phone : "1234567890"
                                                            }

---------------------------------------------------------------------------------------------------------------------------------------------------



*/