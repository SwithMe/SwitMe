package com.jwtappliedexample.example.security.constants;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum UserYesOrNo {
    Y("Y"),
    N("N");

    private final String define;
}
