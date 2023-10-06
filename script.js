document.addEventListener("DOMContentLoaded", function() 
{
    
    // Just here to test the outputs to see if it is working
    document.getElementById("testButton").addEventListener("click", function() 
    {
        // Getting all user inputs
        let userName = document.getElementById("textBoxName").value;
        let userEmail = document.getElementById("textBoxEmail").value;
        let userUsersAccess = document.getElementById("usersAccess").value;

        const signUp = new SignUp(userName, userEmail, userpaymentMethod, userSubsType, userUsersAccess, userResolutionType);
        
        console.log("Name: ", signUp.name);
        console.log("Email: ", signUp.email);
        console.log("Payment: ", signUp.paymentMethod);
        console.log("Subs: ", signUp.subsType);
        console.log("UsersAccess: ", signUp.usersAccess);
        console.log("Resolution: ", signUp.resolutionType);
    });

    let userpaymentMethod = undefined;
    // If the cash image is clicked 
    document.getElementById("cash").addEventListener("click", function() {
        userpaymentMethod = "Cash";
    });
    // If the credit card image is clicked 
    document.getElementById("creditCard").addEventListener("click", function() {
        userpaymentMethod = "Credit";
    });

    let userSubsType = 150;
    // If any of the dropdown input is changed
    document.getElementById("subsType").addEventListener("change", function() {
        switch (this.value)
        {
            case "Mobile":
                userSubsType = 150;
                break;
            case "Basic":
                userSubsType = 400;
                break;
            case "Standard":
                userSubsType = 500;
                break;
            case "Premium":
                userSubsType = 600;
                break;    
        }
    });

    let userResolutionType = undefined;
    // If any of the radio buttons are clicked
    document.getElementsByName("resolutionTypeGroup").forEach((resolution) => {
        resolution.addEventListener("change", (event) => {
            userResolutionType = event.target.value;
        });
    });
});

class SignUp
{
    _name;
    _email;
    _paymentMethod;
    _subsType;
    _usersAcess;
    _resolutionType;

    constructor(name, email, paymentMethod, subsType, usersAccess, resolutionType)
    {
        this.name = name;
        this.email = email;
        this.paymentMethod = paymentMethod;
        this.subsType = subsType;
        this.usersAccess = usersAccess;
        this.resolutionType = resolutionType;
    }

    static hasNoNumbers(value)
    {
        const numberRegex = /^[^0-9]*$/;
        return numberRegex.test(value)
    }

    static isValidEmail(value)
    {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(value);
    }

    set name(value)
    {
        let trimmedValue = value.trim();
        if (trimmedValue === "") 
        {
            alert("Name field must not be empty");
            throw new Error();
        }

        if (!SignUp.hasNoNumbers(trimmedValue))
        {
            alert("Name must not contain numbers");
            throw new Error();
        }

        this._name = trimmedValue;
    }
    get name()
    {
        return this._name;
    }

    set email(value)
    {
        let trimmedValue = value.trim();
        if ((!SignUp.isValidEmail(trimmedValue))) 
        {
            alert("Invalid email address field syntax");
            throw new Error();
        } 

        this._email = trimmedValue;
    }
    get email()
    {
        return this._email;
    }

    set paymentMethod(value)
    {
        if (value === undefined)
        {
            alert("A payment method is required");
            throw new Error();
        }
        this._paymentMethod = value;
    }
    get paymentMethod()
    {
        return this._paymentMethod;
    }

    set subsType(value)
    {
        if (value === undefined)
        {
            alert("A subscription type is required");
            throw new Error();
        }
        this._subsType = value;
    }
    get subsType()
    {
        return this._subsType;
    }

    set usersAccess(value)
    {
        const trimmedValue = value.trim();
        if (!trimmedValue.match(/^\d+$/)) 
        {
            alert("Users access field must contain only digits");
            throw new Error();
        }
    
        const parsedValue = parseInt(trimmedValue);
        if ((isNaN(parsedValue)))
        {
            alert("Users access field must not be empty and must be an integer");
            throw new Error();
        }   

        const lessThanZero = (parsedValue) =>
        {
            if (parsedValue > 0)
            {
                return false;
            }
            return true;
        }

        if (lessThanZero(parsedValue))
        {
            alert("Users access field must not be lesser than one");
            throw new Error();
        }

        this._usersAccess = parsedValue;
    }
    get usersAccess()
    {
        return this._usersAccess;
    }

    set resolutionType(value)
    {
        if (value === undefined)
        {
            alert("A resolution type input is required");
            throw new Error();
        }
        this._resolutionType = value;
    }
    get resolutionType()
    {
        return this._resolutionType;
    }
}