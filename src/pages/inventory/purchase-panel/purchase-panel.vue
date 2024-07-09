<template>
  <div class="row">
    <div class="col-12 mb-2">
      <div class="kino-title rounded-pill">
        <h6 class="mb-0">Purchase Panel</h6>
        <div class="contract-date text-min text-end"></div>
      </div>
    </div>
    <div class="col-12 col-sm-6 col-md-4 mb-2">
      <KinoInput type="date" label="Date" />
    </div>
    <div class="col-12 col-sm-6 col-md-4 mb-2">
      <KinoInput
        label="Entry Pass"
        :options="entrypass"
        optionsKey="name"
        v-model="selectedEntryPass"
      />
    </div>
    <div class="col-12 col-sm-6 col-md-4 mb-2">
      <KinoInput
        label="Invoice #"
        type="number"
        placeholder="e.g 500"
        v-model="invoiceNumber"
      />
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-md-6 mb-2">
          <div class="kino-selector">
            <KinoSearch
              label="Vendor"
              :data="vendors"
              v-model="selectedVendor"
            />
            <DisplayField
              :data="selectedVendor"
              :display="['name', 'mobile']"
            />
          </div>
        </div>
        <div class="col-md-6 mb-2">
          <div class="kino-selector">
            <KinoSearch
              label="Supervisor"
              :data="supervisors"
              v-model="selectedSupervisor"
            />
            <DisplayField
              :data="selectedSupervisor"
              :display="['name', 'mobile']"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <h6 class="heading-1">Products Details</h6>
      <div class="row">
        <div class="col-md-5 col-lg-4">
          <div class="kino-selector mb-2">
            <KinoSearch
              label="Product"
              :data="products"
              v-model="currentProduct"
            />
            <DisplayField
              :data="currentProduct"
              :display="['name', 'category', 'brand']"
            />
          </div>
          <div class="row">
            <div class="col-sm-6">
              <KinoInput
                label="Expiry"
                type="date"
                v-model="expiry"
                class="mb-2"
              />
            </div>
            <div class="col-sm-6">
              <KinoInput
                label="Quantity"
                type="number"
                placeholder="e.g 500"
                v-model="quantity"
                class="mb-2"
              />
            </div>
            <div class="col-sm-6">
              <KinoInput
                label="Pieces/Pack"
                type="number"
                placeholder="e.g 24"
                v-model="piecesperpack"
                class="mb-2"
              />
            </div>

            <div class="col-sm-6">
              <button class="kino-btn w-100 rounded my-1" @click="addProduct()">
                Add
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-8">
          <KinoTable :tableData="myproducts" tableTitle="Current Products" />
        </div>
      </div>
    </div>
    <div class="col-4 mb-2"></div>
    <div class="col-3 mb-2"></div>
    <div class="col-3 mb-2"></div>
    <div class="col-3 mb-2"></div>
    <div class="col-3 mb-2"></div>
    <div class="col-12"></div>
    <div class="col-12">
      <div class="my-1 text-right">
        <button class="kino-btn-text py-2 rounded">Dismiss</button>
        <button class="kino-btn py-2 mx-2 rounded">
          <i class="fa-solid fa-floppy-disk"></i> Save
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PurchasePanel",
  data() {
    return {
      invoiceNumber: "",
      selectedEntryPass: "",
      selectedVendor: "",
      selectedSupervisor: "",
      myproducts: [],
      currentProduct: null,
      expiry: "",
      quantity: "",
      piecesperpack: "",
    };
  },
  computed: {
    supervisors() {
      return this.$store.getters.getData("supervisor") || [];
    },
    vendors() {
      return this.$store.getters.getData("vendors") || [];
    },
    entrypass() {
      return this.$store.getters.getData("entrypass") || [];
    },
    products() {
      return this.$store.getters.getData("products") || [];
    },
  },
  created() {
    this.$store.dispatch("fetchData", "supervisor");
    this.$store.dispatch("fetchData", "vendors");
    this.$store.dispatch("fetchData", "entrypass");
    this.$store.dispatch("fetchData", "products");
    setTimeout(() => {
      console.log(this.selectedVendor);
    }, 5000);
  },
  methods: {
    addProduct() {
        const types = ['warning', 'success', 'error', 'info'];
        const currentMessage = types[Math.floor(Math.random() * types.length)]
      this.$alert({
        message: 'This is just a test nofitication for app to check the alert capability of the app',
        duration: Math.floor(Math.random() * 10)+'000',
        summary: 'Hi Tihs ',
        severity: currentMessage,
        icon: 'fa-solid fa-world',
        enableSound: true
      });
      //   let product = {
      //     product: this.currentProduct.name,
      //     expiry: this.expiry,
      //     quantity: this.quantity,
      //     unit: this.piecesperpack,
      //   };
      //   this.myproducts.push(product);
    }
  },
};
</script>
<style scoped>
.row {
  font-size: 0.9rem;
}
</style>
