-module(step_up_diagnostic_controller, [Req]).
-compile(export_all).

notfound('GET', []) ->
  {ok, [{diag,"404"}]}.