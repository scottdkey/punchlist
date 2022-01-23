//
//  LoginView.swift
//  punchlist
//
//  Created by Scott Key on 1/16/22.
//

import GoogleSignIn
import SwiftUI

struct LoginView: View {
    @EnvironmentObject var auth: UserAuthModel

    var body: some View {
        VStack {
            Spacer()
            Text("Welcome to Punchlist")
                .fontWeight(.black)
                .foregroundColor(Color(.systemIndigo))
                .font(.largeTitle)
                .multilineTextAlignment(.center)
            Text("Simplify your shared tasks")
                .fontWeight(.light)
                .multilineTextAlignment(.center)
                .padding()
            Spacer()
            GoogleSignInButton()
                .padding()
                .onTapGesture {
                    auth.signIn()
                }
        }
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
            .environmentObject(UserAuthModel())
    }
}
