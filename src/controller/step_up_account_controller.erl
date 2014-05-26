-module (step_up_account_controller, [Req]).
-compile (export_all).

login('GET', []) ->
  UserAccounts = boss_db:find(account, []),
  {ok, [{accounts, UserAccounts}]}.
       
create('GET', []) ->
  ok;

create('POST', []) ->
  UserAccount = Req:post_param("user_account"),
  NewUserAccount = account:new(id, UserAccount),
  {ok, SavedAccount} = NewUserAccount:save(),
  {redirect, [{action, "login"}]}.