-module(step_up_incoming_mail_controller).
-compile(export_all).

authorize_(User, DomainName, IPAddress) ->
    true.

% post(FromAddress, Message) ->
%    ok.
