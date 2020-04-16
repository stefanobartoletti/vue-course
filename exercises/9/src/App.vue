<template>
    <div class="container">
        <form>
            <div class="row" v-if="!formSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input
                                type="text"
                                id="firstname"
                                class="form-control"
                                v-model="userData.firstName"
                                >
                    </div>
                    
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input
                                type="text"
                                id="lastname"
                                class="form-control"
                                v-model="userData.lastName"
                                >
                    </div>   

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                                type="email"
                                id="email"
                                class="form-control"
                                v-model="userData.email"
                                >
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userData.password"
                                >
                    </div>

                    <div class="form-group">
                        Store in database: 
                        <label for="storedata">Yes</label>
                        <input
                                type="radio"
                                id="storedata"
                                value="Yes"
                                v-model="storeData"
                                >
                       <label for="storedatanot">No</label>
                        <input
                                type="radio"
                                id="storedatanot"
                                value="No"
                                v-model="storeData"
                                >
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <hr>

                    <button
                            class="btn btn-primary"
                            @click.prevent="submitted"
                            >Submit!
                    </button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="formSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{userData.firstName + ' ' + userData.lastName}}</p>
                        <p>Mail: {{userData.email}}</p>
                        <p>Password: {{userData.password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                    <div class="panel-heading">
                        <button
                            class="btn btn-primary"
                            @click.prevent="modifyData"
                            >Modify data
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                },
                storeData: 'Yes',
                formSubmitted: false,
            }
        },
        methods: {
            submitted() {
                this.formSubmitted = true;
            },
            modifyData() {
                this.formSubmitted = false;
            }
        },
    }
</script>

<style>
</style>
