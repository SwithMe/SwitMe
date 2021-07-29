package com.watch.switme.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UserInfoResponseDto {
    private Long user_idx;
    private String user_name;
    private String user_email;
    private int user_manner;
}
