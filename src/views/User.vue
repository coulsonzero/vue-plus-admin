<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Name">
        <el-input v-model="formInline.user" placeholder="Name" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">Query</el-button>
        <el-button type="primary" @click="handleAdd">Add</el-button>
        <el-button type="danger" @click="handleDeleteList">多选删除</el-button>
      </el-form-item>
    </el-form>


    <!-- table -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" :selectable="selectable" width="55" />
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column fixed="right" label="Operations" min-width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="handleEdit(scope.row)">Edit</el-button>
        <el-button link type="danger" size="small" @click="handleDelete(scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- dialog -->
  <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增' : '编辑'" width="500">
  <el-form :model="tableForm">
    <el-form-item label="Date" :label-width="80">
      <el-input v-model="tableForm.date" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Name" :label-width="80">
      <el-input v-model="tableForm.name" autocomplete="off" />
    </el-form-item>
    <el-form-item label="State" :label-width="80">
      <el-input v-model="tableForm.state" autocomplete="off" />
    </el-form-item>
    <el-form-item label="City" :label-width="80">
      <el-input v-model="tableForm.city" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Address" :label-width="80">
      <el-input v-model="tableForm.address" autocomplete="off" />
    </el-form-item>
  </el-form>
  <template #footer>
    <div class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">
        Confirm
      </el-button>
    </div>
  </template>
</el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let formInline = ref({
user: '',
})
let dialogFormVisible = ref(false)
let tableForm = ref({})
let dialogType = ref('add')

const tableData = [
{
  id: 1,
  date: '2016-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Home',
},
{
  id: 2,
  date: '2016-05-02',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Office',
},
{
  id: 3,
  date: '2016-05-04',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Home',
},
{
  id: 4,
  date: '2016-05-01',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Office',
},
]

const handleClick = () => {
console.log('click')
}



function handleAdd() {
dialogType.value = 'add'
dialogFormVisible.value = true
tableForm = {}
}

function handleEdit(row) {
dialogType.value = 'edit'
dialogFormVisible.value = true

tableForm = {...row}
}


function handleDelete(row) {
console.log(row.id)
}
</script>

<style>

</style>