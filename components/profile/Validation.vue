<template>
    <mdb-container class="mt-5">
        <h1 class="my-5">Form Validation</h1>
        <!-- Custom styles -->
        <h2 class="my-5">Custom styles</h2>
        <form class="needs-validation" novalidate @submit="checkForm($event)">
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="validationCustom01">First name</label>
                    <input type="text" v-model="validation.firstName" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Last name</label>
                    <input type="text" v-model="validation.lastName" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="validationCustomUsername">Username</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input type="text" v-model="validation.username" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-6 mb-3">
                    <label for="validationCustom03">City</label>
                    <input type="text" v-model="validation.city" class="form-control" id="validationCustom03" placeholder="City" required>
                    <div class="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationCustom04">State</label>
                    <input type="text" v-model="validation.state" class="form-control" id="validationCustom04" placeholder="State" required>
                    <div class="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>
                <div class="col-md-3 mb-3">
                    <label for="validationCustom05">Zip</label>
                    <input type="text" v-model="validation.zip" class="form-control" id="validationCustom05" placeholder="Zip" required>
                    <div class="invalid-feedback">
                        Please provide a valid zip.
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="form-check pl-0">
                    <input class="form-check-input" type="checkbox" v-model="validation.condition" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <mdb-btn type="submit">Submit form</mdb-btn>
        </form>
    </mdb-container>
</template>

<script>
    import { mdbContainer, mdbBtn } from "mdbvue";
    export default {
        name: "Validation",
        data(){
          return {
              validation: {
                  firstName: null,
                  lastName: null,
                  username: null,
                  city: null,
                  state: null,
                  zip: null,
                  condition: false
              }
          }
        },
        computed:{
            isValidate(){
                let res = false

                if(!this.validation.firstName || !this.validation.lastName ||
                    !this.validation.username || !this.validation.city ||
                    !this.validation.state ||!this.validation.zip ||
                    !this.validation.condition)
                {
                    res = true
                }
                return res
            }
        },
        components: {
            mdbContainer,
            mdbBtn
        },
        methods: {
            checkForm(event) {
                event.preventDefault();
                event.target.classList.add('was-validated');

                //console.log(event.target.classList)

               if(this.isValidate) {
                   return false
               }
                console.log(this.validation)
            }
        }
    }
</script>

<style scoped>

</style>