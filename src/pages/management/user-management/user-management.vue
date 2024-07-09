<template>
    <div class="row main">
        <div class="col-12 mb-2">
            <div class="kino-title-head">
                <h6 class="mb-0">User Management</h6>
            </div>
        </div>
        <div class="col-12 mb-2">
            <div class="kino-title-head kino-bg text-white p-1">
                <h6>Actions</h6>
                <div class="btns">
                    <button class="kino-btn mx-2 rounded-pill"><i class="fa-solid fa-plus-square"></i> Add Group</button>
                <button class="kino-btn rounded-pill"><i class="fa-solid fa-plus-square"></i> Add User</button>
                </div>
            </div>
        </div>
        <div class="col-12">

            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" data-toggle="tab" data-target="#super-user">
                        <span>Super User</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#accounts">
                        <span>Accounts</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#productionandsales">
                        <span>Production & Sales</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#vehicledispatch">
                        <span>Vehicle Dispatch & Arrival</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#administrator">
                        <span>Administrator</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#orchard">
                        <span>Orhcard</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#export">
                        <span>Export</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#storeinventory">
                        <span>Store & Inventory</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#localprodsales">
                        <span>Local Production & Sales</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#ceo">
                        <span>CEO</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#localsales">
                        <span>Local Sales</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#gatestaff">
                        <span>Gate Staff</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#exportimportdoc">
                        <span>Export/Import Documentation</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#assistantaccounts">
                        <span>Assistant Accounts</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#auditor">
                        <span>Auditor</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" data-toggle="tab" data-target="#exportassistant">
                        <span>Export Assistant</span>
                        <button class="fa-solid fa-pen-to-square grp-edit" data-toggle="modal"
                            data-target="#editgroup"></button>
                    </button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="super-user">
                    <div class="kino-table my-1">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name <i class="fa-solid fa-sort"></i></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Name">Shahid</td>
                                    <td data-label="Action">
                                        <button class="kino-btn-text kin-text" title="Edit/View"><i
                                                class="fa-solid fa-file-pen"></i></button>
                                        <button class="kino-btn-text text-danger" title="Delete"><i
                                                class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Asif</td>
                                    <td data-label="Action">
                                        <button class="kino-btn-text kin-text" title="Edit/View"><i
                                                class="fa-solid fa-file-pen"></i></button>
                                        <button class="kino-btn-text text-danger" title="Delete"><i
                                                class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="accounts">Accounts</div>
                <div class="tab-pane fade" id="productionandsales">
                    <div class="kino-table my-1">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name <i class="fa-solid fa-sort"></i></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td data-label="Name">Shahid</td>
                                    <td data-label="Action">
                                        <button class="kino-btn-text kin-text" title="Edit/View"><i
                                                class="fa-solid fa-file-pen"></i></button>
                                        <button class="kino-btn-text text-danger" title="Delete"><i
                                                class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td data-label="Name">Asif</td>
                                    <td data-label="Action">
                                        <button class="kino-btn-text kin-text" title="Edit/View"><i
                                                class="fa-solid fa-file-pen"></i></button>
                                        <button class="kino-btn-text text-danger" title="Delete"><i
                                                class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" id="vehicledispatch">vehicledispatch</div>
                <div class="tab-pane fade" id="administrator">administrator</div>
                <div class="tab-pane fade" id="orchard">orchard</div>
                <div class="tab-pane fade" id="export">export</div>
                <div class="tab-pane fade" id="storeinventory">storeinventory</div>
                <div class="tab-pane fade" id="localprodsales">localprodsales</div>
                <div class="tab-pane fade" id="ceo">ceo</div>
                <div class="tab-pane fade" id="localsales">localsales</div>
                <div class="tab-pane fade" id="gatestaff">gatestaff</div>
                <div class="tab-pane fade" id="exportimportdoc">exportimportdoc</div>
                <div class="tab-pane fade" id="assistantaccounts">assistantaccounts</div>
                <div class="tab-pane fade" id="auditor">auditor</div>
                <div class="tab-pane fade" id="exportassistant">exportassistant</div>
            </div>
        </div>

        <!--  All Modals -->
        <div class="col-12">


            <!-- Modal -->
            <div class="modal fade kino-modal" id="editgroup" tabindex="-1">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Group</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="kino-input">
                                        <input type="text" placeholder="e.g Super User" class="form-control">
                                        <label for="">Group Name</label>
                                    </div>
                                </div>
                                <div class="col-12 permissions">
                                    <div class="accordion" id="accordionExample">
                                        <div class="modal-menu">
                                            <div class="title" data-toggle="collapse" data-target="#filemenu">
                                                <span>File</span>
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                            <ul id="filemenu" class="collapse option-list show" data-parent="#accordionExample">
                                                <li>
                                                    <span>
                                                        <input type="checkbox">
                                                        <label for="">Add New Record</label>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox" checked>
                                                        <label for="">Edit Selected Record</label>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox">
                                                        <label for="">Delete Selected Record</label>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox">
                                                        <label for="">Save Record</label>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox" checked>
                                                        <label for="">Print</label>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox">
                                                        <label for="">Refresh</label>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox">
                                                        <label for="">Logout</label>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="modal-menu">
                                            <div class="title" data-toggle="collapse" data-target="#transactionmenu">
                                                <span>Transaction</span>
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                            <ul id="transactionmenu" class="collapse option-list" data-parent="#accordionExample">
                                                <li>
                                                    <span>
                                                        <input type="checkbox">
                                                        <label for="">General Vouncher</label>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox" indeterminate>
                                                        <label for="">Single Transaction Vouncher</label>
                                                        <button class="kino-btn-text" data-toggle="collapse" data-target="#submenu">
                                                            <i class="fa-solid fa-square-plus"></i>
                                                        </button>
                                                    </span>
                                                    <ul class="submenu collapse" id="submenu">
                                                        <li>
                                                            <input type="checkbox">
                                                            <label for="">Cash Paid Vouncher</label>
                                                        </li>
                                                        <li>
                                                            <input type="checkbox">
                                                            <label for="">Cash Recieved Vouncher</label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox">
                                                        <label for="">Multi Transaction Vouncher</label>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <input type="checkbox">
                                                        <label for="">Foreign Transaction</label>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="kino-btn-text mx-2 rounded" data-dismiss="modal">Dismiss</button>
                            <button type="button" class="kino-btn rounded">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "UserManagement",
    data() {
        return {}
    },
    methods: {
        showTab() {

        }
    }
}
</script>
<style scoped>
.row {
    font-size: 0.9rem;
}

.grp-edit {
    border: 0;
    background-color: transparent;
    outline: 0;
    padding: 0;
    color: #fff;
    margin-left: 8px;
}

.grp-edit:hover {
    color: #dbdbdb;
}

.nav-tabs {
    border: 0;
    padding: 0;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    flex-wrap: nowrap;
}
.nav-tabs::-webkit-scrollbar {
    display: none;
}
.nav-tabs::-webkit-scrollbar-thumb{
    display: none;
}
.permissions h6 {
    margin: 0.5rem 0;
}

.permissions .tabs {
    margin: 4px 0;
}

.permissions .tabs .title {

    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}

.permissions .tabs .title>button {
    border: 0;
    outline: 0;
    background-color: transparent;
    padding: 0;
    color: #fff;
}

.nav-tabs .nav-item {
    margin: 0 0 3px 0;
    transition: all .5s;
}

.nav-tabs .nav-item .nav-link {
    color: white;
    border: 0;
    background-color: #757575;
    margin-right: 5px;
    /* border-radius: 25px; */
    padding: 3px 8px;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    width: max-content;
}
.tab-content{
    border: 1px solid var(--theme-text);
}

.permissions .tabs .menu {
    list-style: none;
    padding: 5px;
}

.permissions .tabs .menu li {
    display: flex;
    align-items: center;
    gap: .5rem;
}

.permissions .tabs .menu li label {
    margin-bottom: 0;
}

.nav-tabs .nav-item .nav-link.active {
    background-color: var(--theme-text);
    color: white;
    transform: translateY(3px);
}

.company .address {
    color: #e7e7e7;
}
</style>