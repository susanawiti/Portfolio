package com.example.student.chrome;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

public class LoginActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        EditText etUserEmail =(EditText)findViewById(R.id.etUserEmail);
        Button btnSignUp =(Button)findViewById(R.id.btnSignUp);
        ImageView ivLogo =(ImageView)findViewById(R.id.ivLogo);
        TextView tvLanguage =(TextView)findViewById(R.id.tvLanguage);
        EditText etPassword =(EditText)findViewById(R.id.etPassword);
        Button btnLogin =(Button)findViewById(R.id.btnLogin);
        TextView tvHelp =(TextView)findViewById(R.id.tvHelp);
        TextView tvOr =(TextView)findViewById(R.id.tvOr);
    }
}
