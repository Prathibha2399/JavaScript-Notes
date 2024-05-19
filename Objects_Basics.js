/* ----------------------------------------------------------- OBJECTS ------------------------------------------------------------------- */


/* 
    Objects are collections of various datas. Generally we have Data-types which allows to store data. But data-type holds only single type of data (i.e. if declared with string then it must hold string types of datas or if int then number/integer type of datas or whatever).Objects over-rides all such problems.

    Generally the are in Key-Valued PerformanceObserverEntryList,
        Key -> (Properity name)A string and must be unique
        Value -> can be anything.A


** Hint : relate object as a wadrobe of books and each self specifies a type of books stored hence consider as a Key and books in general as values. 
==> Objects here are called "Plain Objects".


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
                          (or)  user.phone = "1234567890"                   name : "John",
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

    d) checking property existance : "age" in user;       // true
                       = in operator is used for checking existance of properity. They are in quoted string. but can be used without quoted as; 
                       let key = "age";
                       alert(key in user);    //true
                       
        
           **Note : if properity doesnt exist then it simply returns undefined hence can be used for property existance check. eg alert(user.noProperity)  // undefined
                    but what if,
                    let user = {
                        test = undefined;
                    }

                    alert(user.test);             // undefined
                    alert("test" in user);        // true

                    Hence removes the ambiguity in chceking.


    e) Looping over the object : To get all keys (key, values of an obj) we can use for-in looping.
                    eg let user = {
                            name : "John",
                            age : 30,
                            email : "john@gmail.com",
                            location : "Delhi",
                            phone : "1234567890"
                        };
                        for(let key in user){
                            alert(key);                              // name, age, email, location, phone
                        }

        -> variable name can be anything, like prop code....

        **Note : Generally results after looping are in ordered i.e when ever we loop results are in same order of their insertion.
                 But when property is Integer Property (string that can be converted to-and-from an integer without a change) they are sorted in order.
                 e.g let codes = {
                        "49": "Germany",
                        "41": "Switzerland",
                        "44": "Great Britain",
                        "1": "USA"
                        };

                        for (let code in codes) {
                        alert(code);                      // 1, 41, 44, 49
                        };

            =>   behind the scene integer property works as
                        alert( String(Math.trunc(Number("49"))) );              // "49", same, integer property
                        alert( String(Math.trunc(Number("+49"))) );             // "49", not same "+49" ⇒ not integer property
                        alert( String(Math.trunc(Number("1.2"))) );             // "1", not same "1.2" ⇒ not integer property

        So to avoid sorting use non-integer property -->  "+49": "Germany",
                                                          "+41": "Switzerland",


    f) Check for object emptyness : isEmpty()
        eg let user = {}
           alert( isEmpty(user) );      // true

           user["time"] = "8:30 am";
           alert(isEmpty(user));        // false
---------------------------------------------------------------------------------------------------------------------------------------------------

3. Object References & Copying :-
      Copying an object means copying it by reference. That is address value of object is only copied. While copying primitive data they are    copied as a whole. So copying obj creates one set of obj while multiple values storing address of the obj. We can modify the object's content with either objects. (copying an object variable creates one more reference to the same object)
      eg.  let user1 = {
             name : "John",
           };
           let user2 = user1;
           alert(user1 == user2);        // true
           alert(useer1 === user2);      // true

      eg. let a = {};
          let b = {};
          alert(a==b)     // false  since they are two independent object

    
    ** Note : We can modify object even though declared as const
            eg. const user = {
                name: "John"
                };
                user.name = "Pete";       /// doesnt give error
                alert(user.name);        // Pete

        The value of user is constant, it must always reference the same object, but properties of that object are free to change. if,
        const user = {name: "John"};
        user = {name: "Pete"};     // error, user is constant, it must always reference the same object.

---------------------------------------------------------------------------------------------------------------------------------------------------

4. Cloning :
    cloning is duplicating an obj and not creating one more reference of the same obj. So modifications on clone does not modifies original object.
    can be done using;
    a) cloning by using empty obj and iterating over the original obj.
            eg. let user = {
                name: "John",
                age: 30
                };
                let clone = {};             // the new empty object
                for (let key in user) {
                clone[key] = user[key];      // copies all properties into it
                };
                clone.name = "Pete";         // changed the data in it
                alert( user.name );          // John
    
    
    b) Object.assign(dest, ..sources)    ---> dest is the target object and sources are the list of source objects
            eg. let user = { name: "John" };
                let permissions1 = { canView: true };
                let permissions2 = { canEdit: true };
                Object.assign(user, permissions1, permissions2);              // now user = { name: "John", canView: true, canEdit: true }
                alert(user.name);                                  // John
                alert(user.canView);                              // true
                alert(user.canEdit);                              // true

            eg2. let user = {
                    name: "John",
                    age: 30
                };
                let clone = Object.assign({}, user);            // copies all properties of user into the empty object and returns it
                alert(clone.name);              // John
                alert(clone.age);               // 30

       
        *** Note : if property already exists then it overwrites
       
        ** Note : When there is a nested object, object will be copied by reference
                i.e let user = {
                        name: "John",
                        sizes: {
                          height: 182,
                          width: 50
                        }
                    };
                    let clone = Object.assign({}, user);      // clone.sizes and user.sizes will share same references. 
                
            So we can modifiy the contents.In order to avoid, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”

    
   # Structured Cloning :-
                    The call structuredClone(object) clones the object with all nested properties.
                    let clone = structuredClone(user);

---------------------------------------------------------------------------------------------------------------------------------------------------

*/