$(function preview(a) {
  //  $(document).on('click', '.modal_preview', function (e) {
	$('.modal_preview').mouseover( function(e)	{
        e.preventDefault();
        var url = directype_url;
        
        var schrift = '';
        var motive2 = '' ;
        
        for (k1 in motives) {
        	for (k in motives[k1]) {
        		var check =($("input[name='id[" + k1 + "]']:checked").val());
    			  if(motives[k1][check] != undefined)
    				  {
    				  	schrift = '_'+motives[k1][check];
    				  }
    			var elem = document.getElementById(k) ;
    			if (elem) {
    				switch (elem.type) {
    					case 'radio' :
    					case 'checkbox' :
    						if (elem.checked) {
    							motive2 += '_'+motives[k1][k] ;
    						}
    					break ;

    					default :
    						if (elem.value) {
    							motive2 += '_'+elem.value ;
    					}
    					break ;
    				}
    			}
    		}
        }

        if (motive2) {
    		motive = motive2.substring(1) ;
        }
        
        var texttmpl_motiv = '' ;
        // Texttemplate aus dem Motivnamen extrahieren
        if (motive.indexOf(':') != -1) {
    		var t = motive.split(':') ;
    		motive = t.shift() ;
    		texttmpl_motiv = t.join(':') ;
        }
        else if (motive.indexOf('=') != -1) {
    		var t = motive.split('=') ;
    		motive = t.shift() ;
    		texttmpl_motiv = t.join('=') ;
        }
        
        var field_cnt = 0 ;
        var url_tmp = '' ;
        
        url += '?motiv='+encodeURIComponent(motive);
       
        for (var k in dt_fields) {
    		var dt_k = k ;
    		var texttmpl = texttmpl_motiv ;
    		// Texttemplate aus dem Feldnamen extrahieren
    	    if (dt_k.indexOf(':') != -1) {
    			var t = dt_k.split(':') ;
    			dt_k = t.shift() ;
    			texttmpl = t.join(':') ;
    	    }
    	    else if (dt_k.indexOf('=') != -1) {
    			var t = dt_k.split('=') ;
    			dt_k = t.shift() ;
    			texttmpl = t.join('=') ;
    	    }
    	   
    	    // Eingabe auslesen
    	    var v = document.getElementById('custom-products-option-'+dt_fields[k]).value ;
    	   
    
    	    // ggf. ins Texttemplate einsetzen
    	    if (texttmpl) {
    			v = texttmpl.replace(/#(value|text_field)#/, v) ;
    	    }
    	    if (!dt_k) {
    	    	dt_k = 'text'+(field_cnt+1) ;
    	    }
    		url_tmp += '&'+dt_k+'='+encodeURIComponent(v) ;
    		field_cnt++ ;
    	}
        if (field_cnt > 0) {
        	url += url_tmp ;
        }
        else {
        	url += '&text='+encodeURIComponent(text) ;
        }
    
        url += '&width=600' ;
            
       // $('#myModal').html('<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + title + '</h4></div><div class="modal-body"><a href="" data-dismiss="modal"><img src="' + url + '" class="img-responsive img-center"></a></div></div></div>');
       // $('#myModal').modal();
        $('.modal_preview').attr({href: url });
       
    });
});
