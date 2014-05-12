-module (step_up_greeting_controller, [Req]).
-compile (export_all).

hello('GET',[]) ->
  {output, "Hello Dog"}.
  
  
goodbye('GET',[]) ->
    {output, "Goodbye Dog"}.