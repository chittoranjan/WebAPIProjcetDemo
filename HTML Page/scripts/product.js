
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
            }else{
                var emptyRow="<tr>"+ "<td 'style:widht=100%'>" +"Data Not Found" +"</td>"+"</tr";
                $("#ProductListTbl").append(emptyRow);
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

function ProductInfoDetails(obj){
    
    var id=$(obj).attr("data-id");
    $.ajax({
        type: "GET",
        url: "http://localhost:64609/api/productitem/"+id,

        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Request: " + XMLHttpRequest.toString() + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
         },
         success: function (data) {
            if (data!=undefined && data!=null) {
                
            createRowForEmpAcademicInfo(data);
            
          } else {
            alert("No Data Fount!");
          }
        },
    });
      

};

function createRowForEmpAcademicInfo(data){
    var sl=1;
    $("#LoadProductItme").empty();
    $.each(data, function ( key,value) {

        
        var productItemDiv=  '<div class="row">'+  
        '<div class="col-md-1">'+(sl++)+'</div>'+
        '<div class="col-md-3">'+value.ProductName+'</div>'+
        '<div class="col-md-2">'+value.ProductCode+'</div>'+
        '<div class="col-md-3">'+value.ProductPrice+'</div>'+
        '<div class="col-md-3">'+value.ProductDescription+'</div>'+
        '</div>'

        $("#LoadProductItme").append(productItemDiv);
    });
}