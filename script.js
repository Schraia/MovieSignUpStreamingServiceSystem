document.addEventListener("DOMContentLoaded", function() 
{
    // Getting all user inputs
    const userName = document.getElementById("textBoxName").value;
    const userEmail = document.getElementById("textBoxEmail").value;
    const userpaymentMethod = document.getElementById("paymentMethod").value;
    const userSubsType = document.getElementById("subsType").value;
    const userUsersAccess = document.getElementById("usersAccess").value;
    const userResolutionType = document.getElementById("resolutionType").value;

    const signIn = new SignIn(userName, userEmail, userpaymentMethod, userSubsType, userUsersAccess, userResolutionType);
    
    // Just here to test the outputs to see if it is working
    document.addEventListener("click", function() 
    {
        console.log(signIn.name);
        console.log(signIn.email);
        console.log(signIn.userpaymentMethod);
        console.log(signIn.userSubsType);
        console.log(signIn.userUsersAccess);
        console.log(signIn.userResolutionType);
    });
});

class SignIn
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

let paymentCredit = document.getElementById("paymentCredit")
paymentCredit.addEventListener("onclick", function(){
    creditPay();
});

let paymentCash = document.getElementById("paymentCash")
paymentCash.addEventListener("onclick", function(){
    cashPay();
});

function creditPay() 
{
    document.getElementById("payCredit").style.display = "inline";
    document.getElementById("payCreditL").style.display = "inline";
}

function cashPay() 
{
    document.getElementById("payCash").style.display = "inline";
    document.getElementById("payCashL").style.display = "inline";
}
