function splitTable(e){e.wrap("<div class='table-wrapper' />");var t=e.clone();t.find("td:not(:first-child), th:not(:first-child)").css("display","none");t.removeClass("responsive");e.closest(".table-wrapper").append(t);t.wrap("<div class='pinned' />");e.wrap("<div class='scrollable' />");setCellHeights(e,t);e.find("td:first-child, th:first-child").css("display","none")}function unsplitTable(e){e.closest(".table-wrapper").find(".pinned").remove();e.unwrap();e.unwrap();e.find("td:first-child, th:first-child").css("display","table-cell")}function setCellHeights(e,t){var n=e.find("tr"),r=t.find("tr"),i=[];n.each(function(e){var t=$(this),n=t.find("th, td");n.each(function(){var t=$(this).outerHeight(!0);i[e]=i[e]||0;t>i[e]&&(i[e]=t)})});r.each(function(e){$(this).height(i[e])})}var switched=!1,updateTables=function(){$("table.responsive").each(function(e,t){if($(t).width()>$(t).parent().innerWidth()&&!switched){switched=!0;splitTable($(t))}else if($(t).width()<=$(t).parent().innerWidth()&&switched){switched=!1;unsplitTable($(t))}});return!0};updateTables();$(window).on("redraw",function(){updateTables()});$(window).on("resize",updateTables);