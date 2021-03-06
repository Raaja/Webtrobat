////////////////////////////////////////////////////////////////////////////
//    Copyright Webtrobat Team 2013
//    This file is part of Webtrobat.
//
//    Webtrobat is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    Webtrobat is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with Webtrobat.  If not, see <http://www.gnu.org/licenses/>.
//////////////////////////////////////////////////////////////////////////

GetRemoteContentAsyncTest = AsyncTestCase('GetRemoteContentAsyncTest');

GetRemoteContentAsyncTest.prototype.testRequest = function(queue) {
    //create our callback function
    var callbackResponse = "test"
    
    callbackFunction = function(response) {
        callbackResponse = response;
    };

    // set up asynchronous test
    queue.call('Step 1: set up', function(callbacks) {
        // js-test-driver wraps our callback and creates a 'real' callback
        var callbackWrapper = callbacks.add(callbackFunction);

        // pass wrapped callback to the function under test
        Utils.getRemoteContent("http://webtrobat.site90.com/projects/project1.xml", callbackWrapper);
    });

    // check whether callback function has been called
    queue.call('Step 2: assert callback', function() {
        assertEquals("<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\" ?>\n<program> Welcome to Project1 </program>", callbackResponse);
    });
};
