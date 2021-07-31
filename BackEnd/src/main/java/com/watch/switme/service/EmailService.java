package com.watch.switme.service;

import com.watch.switme.dto.SignUpDTO;
import lombok.AllArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailService {

    private JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender){
        this.javaMailSender=javaMailSender;
    }

    /*
    public void sendMail(String toEmail, String subject, String message)  throws MessagingException{
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");
        helper.setFrom("SWITME");
        helper.setTo("kje000124@naver.com");
        helper.setSubject(subject);
        helper.setText(message, true);
        javaMailSender.send(mimeMessage);
    }*/

    public void sendMail(SignUpDTO signUpDTO, String message)  throws MessagingException{
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "utf-8");

        helper.setFrom("SWITME");
        helper.setTo(signUpDTO.getEmail());
        helper.setSubject("SWITME 가입안내입니다.");
        helper.setText(message, true);

        javaMailSender.send(mimeMessage);
    }
}