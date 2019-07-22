export abstract class BaseNotification{
    notification: Array<{message: string}>

    constructor(){
        this.notification = new Array<{message: string}>()
    }

    addNotification(message: string): void{
        this.notification.push({message: message})
    }

    isTrue(value, message){
        if(value)
        this.notification.push({message: message})
    }

    isRequired(value, message){
        if(!value || value.length <= 0)
        this.notification.push({message: message})
    }

    hasMinLen(value, min, message){
        if(!value || value.length < min)
        this.notification.push({message: message})
    }

    hasMaxLen(value, maz, message){
        if(!value || value.length > max)
            this.notification.push({message: message})
    }

    isFixedLen(value, len, message){
        if(!value.length != len)
        this.notification.push({message: message})
    }

    isEmail(value, message){
        var reg = new RegExp(/^\w+([-+.]\w+)*@)\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
        if(!reg.test(value))
            this.notification.push({message: message})
    }   

    get allNotifications(): Array<{ message: string }> {
        return this.notification
    }
    valid(): boolean{ // O booblean é o tipo de retorno do metodo
        return this.notification.length == 0
    }
}

