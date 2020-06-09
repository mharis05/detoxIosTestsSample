.PHONY: postinstall

postinstall:
	# Hot-patch: https://github.com/facebook/react-native/issues/25181#issuecomment-540917459
	cp patch/RCTModuleMethod.m node_modules/react-native/React/Base/
	# Hot-patch: react-native's WebSocket Lib
	sed -i '' "s/SKIP_INSTALL = YES;/SKIP_INSTALL = YES;WARNING_CFLAGS = \"\";/" ./node_modules/react-native/Libraries/WebSocket/RCTWebSocket.xcodeproj/project.pbxproj || true
	