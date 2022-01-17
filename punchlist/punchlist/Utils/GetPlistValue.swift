//
//  GetPlistValue.swift
//  punchlist
//
//  Created by Scott Key on 1/17/22.
//

import Foundation

func getPlistValue(plistName: String, plistKey: String) -> String {
    guard let filePath = Bundle.main.path(forResource: plistName, ofType: "plist") else {
        fatalError("Couldn't find file '\(plistName)'")
    }
    guard let plist = NSDictionary(contentsOfFile: filePath) else {
        fatalError("unable to retrieve plist")
    }
    guard let value = plist.object(forKey: plistKey.uppercased()) as? String else {
        fatalError("Couldn't find key '\(plistKey) in '\(plistName)'")
    }

    return value
}
