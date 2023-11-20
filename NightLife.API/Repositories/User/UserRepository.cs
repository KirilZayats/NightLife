using Dapper;
using Microsoft.AspNetCore.SignalR;
using NightLife.API.Models;
using Npgsql;
using System;
using System.Data;

namespace NightLife.API.Repositories.User
{
    public class UserRepository : IUserRepository
    {
        private readonly NpgsqlConnection _connection;


        public UserRepository(IDbConnection connection)
        {
            _connection = (NpgsqlConnection)connection;
        }

        public async void AddUser(SignUp user)
        {
            try
            {
                _connection.Open();
                using var transaction = _connection.BeginTransaction();
                var cmd = new NpgsqlCommand($@"INSERT INTO public.users (sub, uname, uemail, uavatar)
                                                VALUES('{user.Sub}','{user.Name}', '{user.Email}', '{user.Picture}') ON CONFLICT DO NOTHING", _connection, transaction);
                await cmd.ExecuteNonQueryAsync();
                transaction.Commit();

            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddUser() - {e.Message}");
            }
            finally
            {
                _connection?.Close();
                _connection?.Dispose();
            }
        }

        public async Task<bool> Check(string uuid)
        {
            bool exists = false;
            try
            {
                _connection.Open();
                using var transaction = _connection.BeginTransaction();
                var cmd = new NpgsqlCommand($@" SELECT EXISTS(SELECT * FROM public.users WHERE sub='{uuid}')", _connection, transaction);
                exists = (bool)(await cmd.ExecuteScalarAsync() ?? false);
                transaction.Commit();

            }
            catch (Exception e)
            {
                Console.WriteLine($"Error Check() - {e.Message}");
            }
            finally
            {
                _connection?.Close();
                _connection?.Dispose();
            }
            return exists;
        }

        public async Task<SignUp> GetUser(string uuid)
        {
            SignUp user = null;
            try
            {
                _connection.Open();
                using var transaction = _connection.BeginTransaction();
                var cmd = $@"SELECT * FROM public.users WHERE sub = '{uuid}'";
                user = await _connection
                           .QueryFirstAsync<SignUp>(cmd, transaction: transaction);

                transaction.Commit();

            }
            catch (Exception e)
            {
                Console.WriteLine($"Error GetUser() - {e.Message}");
            }
            finally
            {
                _connection?.Close();
                _connection?.Dispose();
            }

            return user;
        }
    }
}
