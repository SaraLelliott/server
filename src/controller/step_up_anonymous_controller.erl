-module (step_up_anonymous_controller, [Req]).
-compile (export_all).

main('GET', []) ->
  {ok, [{title,"Home Page"}]}.
  
quiz('GET', []) ->
  {ok, [{title,"Quiz"}]}.
  
copyright('GET', []) ->
  {ok, [{title,"Copyright"}]}.