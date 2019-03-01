
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:64609/api/product",

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
        },
        success: function (data) {
            if (data != undefined && data != null) {
                createRowForProduct(data);
            }


        }
    });
});

function createRowForProduct(data) {
    $("#ProductListTbl").empty();
    var index = $("#ProductListTbl").children("tr").length;
    $.each(data, function (key, value) {

        var serialCell = "<td><label id='EmpAcademicSl_" + index + "_Serial' value='" + (index + 1) + "' />" + (++index) + "</td>";
        var brandNameCell = "<td>" + value.BrandName + "</td>";
        var codeCell = "<td>" + value.Code + "</td>";
        var brandDescriptionCell = "<td>" + value.BrandDescription + "</td>";


        var actionCell = "<td>" +
            "<button type='button' id='btnDetails_" + index + "' class='btn btn-info btn-xs red-haze glyphicon glyphicon-eye-open' data-toggle='modal' data-target='#ViewModal' title='Details' data-id='" + value.Id + "' onclick='ProductInfoDetails(this)'></button>" + " " +
            "<button type='button' id='btnEdit_" + index + "' class='btn btn-warning btn-xs yellow glyphicon glyphicon-edit' title='Edit' data-id='" + value.Id + "' onclick='ProductEditRow(this)'></button>" + " " +
            "<button type='button' id='btnRemove_" + index + "' class='btn btn-danger btn-xs red-haze glyphicon glyphicon-trash' data-toggle='modal' data-target='#DeleteModal' title='Delete' data-id='" + value.Id + "' onclick='ProductInfoRemoveRow(this)'></button>" +
            "</td>";

        var newRow = "<tr id='Product_trItems" + index + "'>" + serialCell + brandNameCell + codeCell + brandDescriptionCell + actionCell + "</tr>";
        $("#ProductListTbl").append(newRow);

    });
}
