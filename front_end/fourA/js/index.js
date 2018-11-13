/**
 * Created by web_teach03 on 2018/2/26.
 */
$(document).ready(function(){
    $('.company').on('click',function(){
        $('#company').attr('src', 'images/company2.png');
        $(this).addClass('blue');
        $('.case').removeClass('blue');
        $('.call').removeClass('blue');
        $('#case').attr('src', 'images/case.png');
        $('#call').attr('src', 'images/call.png');
        $('#wrap').show();
        $('#wrap2').hide();
        $('#wrap3').hide();
        $('#wrap4').hide();
        $('#wrap5').hide();
        $('#wrap6').hide();
        $('#wrap7').hide();
    });
    $('.case').on('click',function(){
        $(this).addClass('blue');
        $('.call').removeClass('blue');
        $('.company').removeClass('blue');
        $('#company').attr('src', 'images/company.png');
        $('#case').attr('src', 'images/case-2.png');
        $('#call').attr('src', 'images/call.png');
        $('#wrap').hide();
        $('#wrap2').show();
        $('#wrap3').hide();
        $('#wrap4').hide();
        $('#wrap5').hide();
        $('#wrap6').hide();
        $('#wrap7').hide();
    });
    $('.call').on('click',function(){
        $(this).addClass('blue');
        $('.case').removeClass('blue');
        $('.company').removeClass('blue');
        $('#company').attr('src', 'images/company.png');
        $('#case').attr('src', 'images/case.png');
        $('#call').attr('src', 'images/call2.png');
        $('#wrap').hide();
        $('#wrap2').hide();
        $('#wrap3').show();
        $('#wrap4').hide();
        $('#wrap5').hide();
        $('#wrap6').hide();
        $('#wrap7').hide();
    });
    $('.part1').on('click',function(){
        $('#wrap').hide();
        $('#wrap2').hide();
        $('#wrap3').hide();
        $('#wrap4').show();
        $('#wrap5').hide();
        $('#wrap6').hide();
        $('#wrap7').hide();
    });
    $('.part2').on('click',function(){
        $('#wrap').hide();
        $('#wrap2').hide();
        $('#wrap3').hide();
        $('#wrap4').hide();
        $('#wrap5').show();
        $('#wrap6').hide();
        $('#wrap7').hide();
    });
    $('.part3').on('click',function(){
        $('#wrap').hide();
        $('#wrap2').hide();
        $('#wrap3').hide();
        $('#wrap4').hide();
        $('#wrap5').hide();
        $('#wrap6').show();
        $('#wrap7').hide();
    });
    $('.part4').on('click',function(){
        $('#wrap').hide();
        $('#wrap2').hide();
        $('#wrap3').hide();
        $('#wrap4').hide();
        $('#wrap5').hide();
        $('#wrap6').hide();
        $('#wrap7').show();
    });
    $('.callBtn3,.callBtn').on('click',function(){
        $('.call').addClass('blue');
        $('.case').removeClass('blue');
        $('.company').removeClass('blue');
        $('#company').attr('src', 'images/company.png');
        $('#case').attr('src', 'images/case.png');
        $('#call').attr('src', 'images/call2.png');
        $('#wrap').hide();
        $('#wrap2').hide();
        $('#wrap3').show();
        $('#wrap4').hide();
        $('#wrap5').hide();
        $('#wrap6').hide();
        $('#wrap7').hide();
    });
    $('.callNum').on('click',function(){
       window.location.href='tel:18998416847';
    });
});