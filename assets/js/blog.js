$(document).ready(function() {
        $('.blog-filter-item').click(function() {
                const value = $(this).attr('data-filter')
                if (value == 'all') {
                        $('.blog-post-box').show('1000')
                }
                else {
                        $('.blog-post-box').not('.' + value).hide('1000')
                        $('.blog-post-box').filter('.' + value).show('1000')
                }
        })
        $('.blog-filter-item').click(function() {
                $(this).addClass("blog-active-filter").siblings().removeClass('blog-active-filter');
        })
})