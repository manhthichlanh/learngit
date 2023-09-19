try {
    console.log("Đây là chức năng login")
} catch (error) {
    console.log(error)
}

function testDuplicate() {
    console.log("THIS IS MY TEST");
    return () => {
      console.log("hello")
    }
    
}

function testDuplicate2() {
    console.log("Test duplicate 2");
}