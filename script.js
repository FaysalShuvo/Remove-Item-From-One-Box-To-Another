$(function () {
  $("#btn01").click(function () {
    $("#listbox1 option:selected").each(function () {
      $(this).remove().appendTo("#listbox2");
    });
  }); //choose one by one
  $("#btn02").click(function () {
    $("#listbox2 option:selected").each(function () {
      $(this).remove().appendTo("#listbox1");
    });
  }); //remove one by one
});

$(function () {
  $("#btn03").click(function () {
    $("#listbox1 option").prop("selected", true).remove().appendTo("#listbox2");
  }); //choose  to five items
  $("#btn04").click(function () {
    $("#listbox2 option").prop("selected", true).remove().appendTo("#listbox1");
  }); //remove all
});

$(document).ready(function () {
  $('input[type="button"]').click(function () {
    const $op = $(".select2 option:selected"),
      $this = $(this);
    if ($op.length) {
      $this.val() == "Up"
        ? $op.first().prev().before($op)
        : $op.last().next().after($op);
    }
  });
}); // list up and down with button click

$(function () {
  $("#btn03").click(function () {
    $("#listbox1 option").prop("selected", true).remove().appendTo("#listbox2");
  }); //choose all
  $("#btn04").click(function () {
    $("#listbox2 option").prop("selected", true).remove().appendTo("#listbox1");
  }); //remove all
});
