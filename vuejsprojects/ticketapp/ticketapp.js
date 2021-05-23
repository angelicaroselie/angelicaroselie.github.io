//Creating Vue app named #ticketapp
const app = new Vue({
    el: '#ticketapp',
    data: {
        firstName: '',
        lastName: '',
        email: '',
        ticketQuantity: 1,
        ticketType: '',
        referrals: [],
        specialRequests: '',
        purchaseAgreementSigned: false
    },
    computed: {
        fullName: {
            //First name + Last name = Full name
            get: function () {
                if (this.firstName && this.lastName) {
                    return this.firstName + ' ' + this.lastName;
                } else {
                    return this.firstName || this.lastName;
                }
            },
            set: function (newFullName) {
                const names = newFullName.split(' ');

                if (names.length === 2) {
                    this.firstName = names[0];
                    this.lastName = names[1];
                }

                if (names.length <= 1) {
                    this.firstName = names[0] || '';
                    this.lastName = '';
                }
            }
        },

        //Normally ticket is General Admission, if VIP is selected then ticket is VIP
        ticketDescription: function () {
            let readableTicketType = 'General Admission';
            if (this.ticketType === 'vip') {
                readableTicketType = 'VIP';
            }

            //Display text is "ticket" if 1 ticket selected. If more than 1 tickets selected, display text is "tickets"
            let ticketPluralization = 'ticket';
            if (this.ticketQuantity > 1) {
                ticketPluralization = 'tickets';
            }

            return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
        },

        //Email validation function
        emailIsValid: function () {
            return this.email.includes('@');
        },

        //Checks if form is valid, affects to submit button
        formIsValid: function () {
            return this.firstName && this.lastName && this.email && this.emailIsValid && this.purchaseAgreementSigned;
        },


        //Styles: If email is not valid
        invalidEmailStyles: function () {
            if (this.email && !this.emailIsValid) {
                return {
                    'background-color': '#ffeded',
                    'border-color': '#da5252'
                }
            }
        }



    },
    //"Meet and greet" special request makes ticket vip ticket
    watch: {
        specialRequests: function (newRequests, oldRequests) {
            if (newRequests.toLowerCase().includes('meet and greet') ||
                newRequests.toLowerCase().includes('meet-and-greet')) {
                this.ticketType = 'vip';
            }
            if (newRequests.toLowerCase().includes('vip')) {
                this.ticketType = 'vip';
            }
        }
    },
    methods: {
        resetFields: function () {
            //Function for reset button
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.ticketQuantity = 1;
            this.ticketType = 'general';
            this.referrals = [];
            this.specialRequests = '';
            this.purchaseAgreementSigned = false;
        },
        submitForm: function () {
            alert("Thank you for your purchase!");
            //Form submit functionality will be updated later, now it only sends alert.
        }
    }
});