function hello() {
  $("#output").html("Hello World!");
}

var timer_var;

function timer_start() {
  timer_var = setInterval(timer_dot, 200);
}

function timer_dot() {
  $("#output").append(".");
}

function timer_stop() {
  clearInterval(timer_var);
}

function data_start() {
  $("#output").html("Calling data1.php");
  timer_start();

  $.get("data1.php", function(data) {
    timer_stop();
    $("#output").append("<br/><br/>" + data);

    data2_start();
  });

}

function data2_start() {
  $("#output").append("<br/><br/>Calling data2.php");
  timer_start();

  $.get("data2.php", function(data) {
    timer_stop();
    $("#output").append("<br/><br/>" + data);

    data3_start();
  });

}

function data3_start() {
  $("#output").append("<br/><br/>Calling data3.php");
  timer_start();

  $.get("data3.php", { user: "Chris" }, function(data) {
    timer_stop();
    $("#output").append("<br/><br/>" + data);

    data4_start();
  });

}

function data4_start() {
  $("#output").append("<br/><br/>Calling data4.php");
  timer_start();

  $.get("data4.php", function(data) {
    timer_stop();

    // decode json into html table
    var table = "<table border='1'>";
    table += "<tr>";
    table += "<th>First Name</th><th>Last Name</th><th>Age</th>";
    table += "</tr>";
    var json = JSON.parse(data);
    for (var i = 0; i < json.length; i++) {
      table += "<tr>";
      table += "<td>" + json[i].firstName + "</td>";
      table += "<td>" + json[i].lastName + "</td>";
      table += "<td>" + json[i].age + "</td>";
      table += "</tr>";
    }
    table += "</table>";
    $("#output").append("<br/><br/>" + table);

  });
}
