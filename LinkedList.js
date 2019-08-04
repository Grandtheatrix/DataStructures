class LinkedList {
  constructor(data = null) {
    (this.data = data), (this.next = null);
  }
}

function add(list, data) {
  let current = list;
  if (current.data === null) {
    current.data = data;
    return;
  }
  while (current.next !== null) {
    current = current.next;
  }
  current.next = new LinkedList(data);
  return;
}

function readAll(list) {
  let current = list;
  let currentIndex = 0;
  while (current !== null) {
    console.log(currentIndex, current.data);
    current = current.next;
    currentIndex++;
  }
}

function IndexingWrapper(list, data, index, func) {
  let current = list;
  let currentIndex = 0;
  if (index < 0) {
    console.log("Please enter only positive integers");
    return;
  }
  while (current !== null && currentIndex <= index) {
    if (index === currentIndex) {
      func(list, current, data);
      return;
    }
    current = current.next;
    currentIndex++;
  }
  // by this point we have surpassed the range of the index
  console.log(
    "Index out of range. Please select an index between 0 -",
    currentIndex - 1,
    "for this list"
  );
}

function insertInner(list, current, data) {
  let newNode = new LinkedList();
  newNode.data = current.data;
  newNode.next = current.next;
  current.data = data;
  current.next = newNode;
  readAll(list);
}

function updateInner(list, current, data) {
  current.data = data;
  readAll(list);
}
function readIndexInner(list, current, data) {
  console.log(current.data);
}
function deleteInner(list, current, data) {
  if (current.next !== null) {
    let newData = current.next.data;
    current.data = newData;

    let newNext = current.next.next;
    current.next = newNext;
  } else {
  }
}

function insert(list, data, index) {
  IndexingWrapper(list, data, index, insertInner);
}

function update(list, data, index) {
  IndexingWrapper(list, data, index, updateInner);
}

function readIndex(list, index) {
  IndexingWrapper(list, null, index, readIndexInner);
}

function deleteIndex(list, index) {
  if (index < 0) {
    console.log("Please enter only positive integers");
    return;
  }
  let current = list;
  let previous = null;
  let currentIndex = 0;
  while (current !== null && currentIndex <= index) {
    if (index === currentIndex) {
      previous.next = current.next;

      return;
    }
    previous = current;
    current = current.next;
    currentIndex++;
  }
  // by this point we have surpassed the range of the index
  console.log(
    "Index out of range. Please select an index between 0 -",
    currentIndex - 1,
    "for this list"
  );
}

let newList = new LinkedList();

add(newList, "Bethany");
add(newList, "Louise");
add(newList, "Stavros");

//readAll(newList);
//readIndex(newList, 0);
readIndex(newList, 1);
// readIndex(newList, 2);
//update(newList, "Webber", 2);
deleteIndex(newList, 1);
