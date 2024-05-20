$(document).ready(function (){
    let error_title;
    let error_content;
    $('.btn_sub').on('click', function (){

        let title = $('.title-input').val();
        let text = $('.text-input').val();
        if(!error_content && !error_title){
            $.ajax({
                url: '/form.php',
                method: 'post',
                data: {title: title, text:text},
                success: function(data){
                    console.log($('.post-alert'))
                    $('.post-alert').addClass('post-create')
                }
            });
        }
    })
    $('.title-input').blur(function() {
        if(!$('.title-input').val()){
            error_title = true
            $('.title-input').removeClass('is-valid')
            $('.title-input').addClass('is-invalid')
            $('.error-title').text('Поле title обязательное!!');
        }else if($('.title-input').val().length <= 6){
            error_title = true
            $('.title-input').removeClass('is-valid')
            $('.title-input').addClass('is-invalid')
            $('.error-title').text('Длина меньше 7!!');
        }else {
            error_title = false
            $('.error-title').text('');
            $('.title-input').removeClass('is-invalid')
            $('.title-input').addClass('is-valid')
        }
    });
    $('.text-input').blur(function() {
        if(!$('.text-input').val()){
            error_content = true
            $('.text-input').removeClass('is-valid')
            $('.text-input').addClass('is-invalid')
            $('.error-text').text('Поле title обязательное!!');
        }else if($('.text-input').val().length <= 19){
            error_content = true
            $('.text-input').removeClass('is-valid')
            $('.text-input').addClass('is-invalid')
            $('.error-text').text('Длина меньше 20!!');
        }else {
            error_content = false
            $('.error-text').text('');
            $('.text-input').removeClass('is-invalid')
            $('.text-input').addClass('is-valid')
        }
    });
    $('.text-input').on('click', function (){
        if($('.post-create')){
            $('.text-input').removeClass('is-valid')
            $('.text-input').removeClass('is-invalid')
            $('.post-create').removeClass('post-create')
            $('.text-input').val('');
        }
    })
    $('.title-input').on('click', function (){
        if($('.post-create')){
            $('.title-input').removeClass('is-valid')
            $('.title-input').removeClass('is-invalid')
            $('.post-create').removeClass('post-create')
            $('.title-input').val('');
        }
    })


})