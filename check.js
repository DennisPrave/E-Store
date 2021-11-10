<script type="text/javascript"></script>
function validate() {
var f = document.getElementById("firstname").value;
var l = document.getElementById("lastname").value;
var e = document.getElementById("email").value;
var p = document.getElemettById("phone").value;
var p1 = document.getElementById("password").value;
var p2 = document.getElementById("password_retype").value;
 
if(f== "") {
alert("Vui lòng nhập tên!");
return false;
}
if(l== "") {
    alert("Vui lòng nhập tên!");
return false;
}
if(e== "") {
    alert("Vui lòng nhập tên!");
return false;
}
if(p== "") {
    alert("Vui lòng nhập tên!");
return false;
        }
if(p1 == "") {
alert("Vui lòng nhập mật khẩu!");
return false;
}
if(p2 == "") {
alert("Vui lòng xác minh mật khẩu!");
return false;
}
 
alert("Xin hãy điền đúng thông tin!")
 
return true;
}

</script>