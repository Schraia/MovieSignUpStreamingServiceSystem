document.addEventListener("DOMContentLoaded", function() 
{
    
    // Just here to test the outputs to see if it is working
    document.getElementById("testButton").addEventListener("click", function() 
    {
        // Getting all user inputs
        const userName = document.getElementById("textBoxName").value;
        const userEmail = document.getElementById("textBoxEmail").value;
        const userUsersAccess = document.getElementById("usersAccess").value;
        const userResolutionType =  document.querySelector('input[name="resolutionType"]:checked').value

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

    set name(value)
    {
        this._name = value;
    }
    get name()
    {
        return this._name;
    }

    set email(value)
    {
        this._email = value;
    }
    get email()
    {
        return this._email;
    }

    set paymentMethod(value)
    {
        this._paymentMethod = value;
    }
    get paymentMethod()
    {
        return this._paymentMethod;
    }

    set subsType(value)
    {
        this._subsType = value;
    }
    get subsType()
    {
        return this._subsType;
    }

    set usersAccess(value)
    {
        this._usersAccess = value;
    }
    get usersAccess()
    {
        return this._usersAccess;
    }

    set resolutionType(value)
    {
        this._resolutionType = value;
    }
    get resolutionType()
    {
        return this._resolutionType;
    }
}