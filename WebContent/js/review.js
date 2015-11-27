/**
 * 
 */
$('#detailModal').on('show.bs.modal', function(event) {
	//alert(event.relatedTarget);
	var tr = $(event.relatedTarget); // Button that triggered the modal

	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this);

	//modal.find('.modal-title').text('New message to ' + recipient);
	modal.find("#shopname").html("店铺名："+tr.data("shopname")); // Extract info from data-* attributes
	modal.find("#date").html("申请日期："+tr.data("date"));
	modal.find("#type1").html("类型1："+tr.data("type1"));
	modal.find("#type2").html("类型2："+tr.data("type2"));
	modal.find("#address").html("详细地址："+tr.data("address"));
	modal.find("#description").html("详细描述："+tr.data("description"));
	modal.find("#owner").html("联系人："+tr.data("owner"));
	modal.find("#phone").html("联系电话："+tr.data("phone"));
	modal.find("#license").html("营业执照号："+tr.data("license"));
})