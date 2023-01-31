function save() {
    var read = document.getElementById('inputTaskIsComplete');
    if (read.checked == true) {
        tasklist = JSON.parse(localStorage.getItem('listItem3')) ?? []
        var id
        tasklist.length != 0 ? tasklist.findLast((item) => id = item.id) : id = 0

        if (document.getElementById('inputTaskId').value) {
            tasklist.forEach(value => {
                if (document.getElementById('inputTaskId').value == value.id) {
                    value.tasktitle = document.getElementById('inputTasktitle').value,
                        value.taskdescr = document.getElementById('inputTaskDescr').value,
                        value.taskdate = document.getElementById('inputTaskDate').value,
                        value.isComplete = 1
                }
            });
            document.getElementById('id').value = ''
        } else {
            var item = {
                id: id + 1,
                tasktitle: document.getElementById('inputTaskTitle').value,
                taskdescr: document.getElementById('inputTaskDescr').value,
                taskdate: document.getElementById('inputTaskDate').value,
                isComplete: 1,
            }
            tasklist.push(item)
        }
        localStorage.setItem('listItem3', JSON.stringify(tasklist))
    } else {

        tasklist2 = JSON.parse(localStorage.getItem('listItem4')) ?? []
        var id
        tasklist2.length != 0 ? tasklist.findLast((item) => id = item.id) : id = 0
        if (document.getElementById('inputTaskId').value) {
            tasklist2.forEach(value => {
                if (document.getElementById('inputTaskId').value == value.id) {
                    value.tasktitle = document.getElementById('inputTasktitle').value,
                        value.taskdescr = document.getElementById('inputTaskDescr').value,
                        value.taskdate = document.getElementById('inputTaskDate').value,
                        value.isComplete = 0
                }
            });
            document.getElementById('inputTaskId').value = ''
        } else {
            var item = {
                id: id + 1,
                tasktitle: document.getElementById('inputTasktitle').value,
                taskdescr: document.getElementById('inputTaskDescr').value,
                taskdate: document.getElementById('inputTaskDate').value,
                isComplete: 0,
            }
            tasklist2.push(item)
        }
        localStorage.setItem('listItem4', JSON.stringify(tasklist2))
    }
    allData()
    document.getElementById('form').reset()
}
function allData() {

    table.innerHTML = ``
    tasklist = JSON.parse(localStorage.getItem('listItem4')) ?? []
    tasklist.forEach(function (value, i) {

        var table = document.getElementById('table')
        // if(value.isComplete == 0){
        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.tasktitle}</td>
                <td>${value.taskdescr}</td>
                <td>${value.taskdate}</td>
                <td><button class="btn btn-sm btn-warning" onclick="read(${value.id},'${value.tasktitle}','${value.taskdescr}',${value.taskdate})">
                <i class="fa fa-check"></i>
                </button></td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData4(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
        // }

    })
    table2.innerHTML = ``
    tasklist2 = JSON.parse(localStorage.getItem('listItem3')) ?? []

    tasklist2.forEach(function (value2, i) {

        var table2 = document.getElementById('table2')
        // console.log(value2.isComplete);
        // if(value2.isComplete == 1){
        table2.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value2.tasktitle}</td>
                <td>${value2.taskdescr}</td>
                <td>${value2.taskdate}</td>
                <td><button class="btn btn-sm btn-warning" onclick="read2(${value2.id},'${value2.tasktitle}','${value2.taskdescr}',${value2.taskdate})">
                <i class="fa fa-check"></i>
                </button></td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="find(${value2.id})">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData3(${value2.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
        // }

    })

}
function removeData3(id) {

    tasklist = JSON.parse(localStorage.getItem('listItem3')) ?? []
    tasklist = tasklist.filter(function (value) {
        return value.id != id;
    });
    // localStorage.clear();
    localStorage.setItem('listItem3', JSON.stringify(tasklist))
    allData()
}
function removeData4(id) {
    tasklist = JSON.parse(localStorage.getItem('listItem4')) ?? []
    tasklist = tasklist.filter(function (value) {
        return value.id != id;
    });
    localStorage.setItem('listItem4', JSON.stringify(tasklist))
    allData()
}
function find(id) {
    tasklist = JSON.parse(localStorage.getItem('listItem4')) ?? []
    tasklist.forEach(function (value) {
        if (value.id == id) {
            console.log(id);
            document.getElementById('inputTaskId').value = id
            document.getElementById('inputTasktitle').value = value.tasktitle
            document.getElementById('inputTaskDescr').value = value.taskdescr
            document.getElementById('inputTaskDate').value = value.taskdate
        }
    })
}
function read(id1, tasktitle1, taskdescr1, taskdate1) {
    if (id1) {
        var item = [{
            id: id1,
            tasktitle: tasktitle1,
            taskdescr: taskdescr1,
            taskdate: taskdate1,
            isComplete: 1,
        }];
        tasklist = JSON.parse(localStorage.getItem('listItem3')) ?? []
        tasks = item.concat(tasklist);
        var itemString = JSON.stringify(tasks);
        localStorage.setItem('listItem3', itemString);
    }

    tasklist4 = JSON.parse(localStorage.getItem('listItem4')) ?? []
    tasklist4 = tasklist4.filter(function (value) {
        return value.id != id1;
    });
    localStorage.setItem('listItem4', JSON.stringify(tasklist4))
    allData()
}
function read2(id1, tasktitle1, taskdescr1, taskdate1) {
    if (id1) {
        var item = [{
            id: id1,
            tasktitle: tasktitle1,
            taskdescr: taskdescr1,
            taskdate: taskdate1,
            isComplete: 1,
        }];
        tasklist = JSON.parse(localStorage.getItem('listItem4')) ?? []
        tasks = item.concat(tasklist);
        var itemString = JSON.stringify(tasks);
        localStorage.setItem('listItem4', itemString);
    }

    tasklist3 = JSON.parse(localStorage.getItem('listItem3')) ?? []
    tasklist3 = tasklist3.filter(function (value) {
        return value.id != id1;
    });
    localStorage.setItem('listItem3', JSON.stringify(tasklist3))
    allData()
}