document.addEventListener("DOMContentLoaded", function() 
{
    
    // Just here to test the outputs to see if it is working
    document.getElementById("testButton").addEventListener("click", function() 
    {
        // Getting all user inputs
        let userName = document.getElementById("textBoxName").value;
        let userEmail = document.getElementById("textBoxEmail").value;
        let userUsersAccess = document.getElementById("usersAccess").value;

        const signUp = new SignUp(userName, userEmail, userpaymentMethod, userpaymentMethodValue, userSubsType, userUsersAccess, userResolutionType);
        
        // Subscription bill to be displayed in separate HTML
        console.log("Name: ", signUp.name);
        console.log("Email: ", signUp.email);
        console.log("Payment: ", signUp.paymentMethod); 
        console.log("PaymentMethodValue: ",);
        console.log("Subs: ", signUp.subsType);
        console.log("Total Monthly Fee: ", signUp.calculateMonthlyFee());
        console.log("DeviceImageAccess:",)
        console.log("Number of users: ",)
        console.log("UsersAccess: ", signUp.usersAccess);
        console.log("Resolution: ", signUp.resolutionType);
        console.log("Next Charge Date: ", signUp.calculateNextMonthDate());
    });

    let userpaymentMethod = undefined;
    // If the cash image is clicked 
    document.getElementById("cash").addEventListener("click", function() {
        userpaymentMethod = "Cash";
        document.getElementById("payCredit").style.display = "none";
        document.getElementById("payCreditL").style.display = "none";
        document.getElementById("payCash").style.display = "inline ";
        document.getElementById("payCashL").style.display = "inline";
    });
    // If the credit card image is clicked 
    document.getElementById("creditCard").addEventListener("click", function() {
        userpaymentMethod = "Credit";
        document.getElementById("payCash").style.display = "none";
        document.getElementById("payCashL").style.display = "none";
        document.getElementById("payCredit").style.display = "inline";
        document.getElementById("payCreditL").style.display = "inline";
    });

    let userpaymentMethodValue = undefined;
    document.getElementById("payCash").addEventListener("input", function() {
        userpaymentMethodValue = `$${this.value}`;
    });
    document.getElementById("payCredit").addEventListener("input", function() {
        userpaymentMethodValue = this.value;
    });

    let userSubsType = "Mobile";
    // If any of the dropdown input is changed
    document.getElementById("subsType").addEventListener("change", function() {
        userSubsType = this.value;
    });
    let userResolutionType = "720p";
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
    _paymentMethodValue;
    _subsType;
    _usersAcess;
    _resolutionType;

    constructor(name, email, paymentMethod, paymentMethodValue, subsType, usersAccess, resolutionType)
    {
        this.name = name;
        this.email = email;
        this.paymentMethod = paymentMethod;
        this.paymentMethodValue = paymentMethodValue;
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

    set paymentMethodValue(value)
    {
        // do setters
    }
    get paymentMethodValue()
    {
        return this._paymentMethodValue
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
            if (parsedValue < 0)
            {
                return true;
            }
            return false;
        }

        if (lessThanZero(parsedValue))
        {
            alert("Users access field must not be a negative value");
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

    calculateMonthlyFee()
    {
        let subVal = 0, resVal = 0
        switch(this.subsType){
            case "Mobile":
                subVal = 150;
                break;
            case "Basic":
                subVal = 400;
                break;
            case "Standard":
                subVal = 500;
                break;
            case "Premium":
                subVal = 600;
                break;
        }
        switch(this.resolutionType){
            case "720p":
                resVal = 0;
                break;
            case "1080p":
                resVal = 30;
                break;
            case "4k":
                resVal = 80;
                break;
        }
        return subVal + resVal + ((this.usersAccess) * 60);
    }

    calculateNextMonthDate()
    {
        const currentDate = new Date();

        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1; 
        const currentYear = currentDate.getFullYear();

        const futureDate = new Date(currentYear, currentMonth - 1, currentDay);

        futureDate.setDate(futureDate.getDate() + 30);
        
        const futureDay = futureDate.getDate();
        const futureMonth = futureDate.getMonth() + 1; 
        const futureYear = futureDate.getFullYear();

        return `${futureMonth}/${futureDay}/${futureYear}`;
    }
}
