import { LightningElement, track } from 'lwc';
export default class Passwordgenerator extends LightningElement {

    @track passwordLength = 8; // Default password length
    @track passwords = [];

    handleLengthChange(event) {
        this.passwordLength = event.target.value;
    }

    generatePassword() {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < this.passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        this.passwords = [...this.passwords, password];
}

}