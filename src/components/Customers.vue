<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="pb-2 mb-3 pt-3 border-bottom">Manage Customers</h1>
    <input class="form-control" placeholder="Enter Last Name" v-model="filterInput" />
    <br>
    <table class="table table-stripped table-bordered">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filterBy(customers, filterInput)" v-bind:key="customer.id">
          <td>{{customer.first_name}}</td>
          <td>{{customer.last_name}}</td>
          <td>{{customer.email}}</td>
          <td><router-link class="btn btn-default" role="button" v-bind:to="'/customer/'+customer.id">View</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alert from './Alert';

  export default {
    name: 'customers',
    data () {
      return {
        alert: '',
        customers: [],
        filterInput: '',
      }
    },
    methods: {
      fetchCustomers() {
        this.$http.get('http://localhost/slimapp/public/api/customers').then(function(response) {
          this.customers =  response.body;
        });
      },
      filterBy(list, value) {
        value = value.charAt(0).toUpperCase() + value.slice();
        return list.filter(function(customer) {
          return customer.last_name.indexOf(value) > -1;
        });
      }
    },
    created: function() {
      if (this.$route.query.alert) {
        this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
    },
    updated: function() {
      this.fetchCustomers();
    },
    components: {
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
