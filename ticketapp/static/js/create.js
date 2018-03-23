function popitup2() {
	newwindow2=window.open('','name','height=500,width=500');
	var tmp = newwindow2.document;
	tmp.write('<html><head><title>Create Ticket</title>');
//	tmp.write('<link rel="stylesheet" href="js.css">');
	tmp.write('</head><body><p>Create Ticket</p>');
	tmp.write('<input type);
	tmp.write('<p><a href="javascript:self.close()">close</a> the popup.</p>');
	tmp.write('</body></html>');
	tmp.close();
}